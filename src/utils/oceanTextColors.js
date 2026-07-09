// 각 섹션의 "오버라인 라벨 + 제목"은 카드 안이 아니라 투명한 배경(그 뒤로
// OceanBackground의 하늘/바다가 그대로 비침) 위에 놓인다. OceanBackground는
// 다크/라이트 토글과 무관하게 항상 같은 색이므로, 그 위에 놓이는 텍스트도
// var(--color-*)(토글에 반응) 대신 고정 색을 써야 라이트모드에서 배경과
// 겹쳐 안 보이는 문제가 없다. (카드/폼 등 불투명한 표면 위의 텍스트는
// 계속 var(--color-*)를 써야 한다 — 그건 표면 색과 함께 자연스럽게 바뀐다.)
export const OCEAN_TEAL = '#2DD4BF'
export const OCEAN_TEXT = '#E6F1F5'
export const OCEAN_TEXT_SECONDARY = '#8FB8C7'
