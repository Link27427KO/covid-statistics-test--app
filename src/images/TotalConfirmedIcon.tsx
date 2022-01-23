import { FC } from 'react'

interface ITotalConfirmedIconProps {
    width?: number
    height?: number
}
const TotalConfirmedIcon: FC<ITotalConfirmedIconProps> = (props: ITotalConfirmedIconProps ) => {
    const {width,height} = props
    return (
        <svg width={width ? width : 30} height={height ? height : 30} viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.7616 13.2852L15.8495 19.1094C15.498 19.8184 14.4785 19.7949 14.1562 19.0742L10.8222 11.6738L9.0644 15.875H3.55073L14.2441 26.8027C14.6601 27.2305 15.3339 27.2305 15.7499 26.8027L26.4491 15.875H20.0566L18.7616 13.2852ZM27.7558 3.33008L27.6152 3.18359C24.5976 0.101562 19.6581 0.101562 16.6347 3.18359L14.9999 4.85937L13.3652 3.18945C10.3476 0.101562 5.40229 0.101562 2.38472 3.18945L2.24409 3.33008C-0.609419 6.24805 -0.732466 10.8945 1.81636 14H7.81635L9.91986 8.94922C10.2363 8.19336 11.3027 8.17578 11.6425 8.92578L15.0527 16.502L17.9238 10.7656C18.2695 10.0742 19.2538 10.0742 19.5995 10.7656L21.2167 14H28.1835C30.7323 10.8945 30.6093 6.24805 27.7558 3.33008Z" fill="#666666"/>
        </svg>
    )
}

export default TotalConfirmedIcon