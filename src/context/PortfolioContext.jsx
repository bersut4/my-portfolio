import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react'
import { initialAboutMeData } from '../data/aboutMeData'
import { initialSkills, sortByLevelDesc } from '../data/skillsData'

const SUMMARY_LENGTH = 100

const PortfolioContext = createContext(null)

export const PortfolioProvider = ({ children }) => {
  const [aboutMeData, setAboutMeData] = useState({
    basicInfo: initialAboutMeData.basicInfo,
    sections: initialAboutMeData.sections,
    skills: initialSkills,
  })
  const [feedback, setFeedback] = useState(null)
  const [revision, setRevision] = useState(0)
  const feedbackCountRef = useRef(0)

  const notify = useCallback((message, severity = 'success') => {
    feedbackCountRef.current += 1
    setFeedback({ message, severity, key: feedbackCountRef.current })
  }, [])

  const clearFeedback = useCallback(() => setFeedback(null), [])

  const updateSection = useCallback(
    (id, content) => {
      setAboutMeData((prev) => ({
        ...prev,
        sections: prev.sections.map((section) => (section.id === id ? { ...section, content } : section)),
      }))
      setRevision((rev) => rev + 1)
      notify('변경사항이 저장되었습니다.')
    },
    [notify]
  )

  const updatePhoto = useCallback(
    (photo) => {
      setAboutMeData((prev) => ({ ...prev, basicInfo: { ...prev.basicInfo, photo } }))
      setRevision((rev) => rev + 1)
      notify('프로필 사진이 변경되었습니다.')
    },
    [notify]
  )

  const updateSkillLevel = useCallback(
    (id, level) => {
      setAboutMeData((prev) => ({
        ...prev,
        skills: prev.skills.map((skill) => (skill.id === id ? { ...skill, level } : skill)),
      }))
      setRevision((rev) => rev + 1)
      notify('숙련도가 저장되었습니다.')
    },
    [notify]
  )

  const addSkill = useCallback(
    (skill) => {
      setAboutMeData((prev) => ({
        ...prev,
        skills: [
          ...prev.skills,
          {
            id: Date.now(),
            level: 30,
            description: '새로 추가한 기술이에요.',
            isMain: false,
            ...skill,
          },
        ],
      }))
      setRevision((rev) => rev + 1)
      notify(`'${skill.name}' 기술이 추가되었습니다.`)
    },
    [notify]
  )

  const homeData = useMemo(() => {
    const homeContent = aboutMeData.sections
      .filter((section) => section.showInHome)
      .map((section) => ({
        id: section.id,
        title: section.title,
        summary:
          section.content.length > SUMMARY_LENGTH
            ? `${section.content.slice(0, SUMMARY_LENGTH)}...`
            : section.content,
      }))

    return {
      homeContent,
      topSkills: sortByLevelDesc(aboutMeData.skills).slice(0, 4),
      basicInfo: aboutMeData.basicInfo,
      updatedAt: revision,
    }
  }, [aboutMeData, revision])

  const value = useMemo(
    () => ({
      aboutMeData,
      updateSection,
      updatePhoto,
      updateSkillLevel,
      addSkill,
      homeData,
      feedback,
      notify,
      clearFeedback,
    }),
    [aboutMeData, updateSection, updatePhoto, updateSkillLevel, addSkill, homeData, feedback, notify, clearFeedback]
  )

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>
}

export const usePortfolio = () => {
  const context = useContext(PortfolioContext)
  if (!context) {
    throw new Error('usePortfolio는 PortfolioProvider 내부에서만 사용할 수 있습니다.')
  }
  return context
}
