export interface ILottieAnimation {
  play: boolean
  reverse: boolean,
  className: string
  onClick: () => void
  width: string | number
  height: string | number
  loop: boolean
  autoPlay: boolean
  speed: number
  children: React.ReactNode
  style?: any
}