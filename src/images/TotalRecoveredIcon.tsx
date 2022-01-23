import { FC } from 'react'

interface ITotalRecoveredIconProps {
    width?: number
    height?: number
}

const TotalRecoveredIcon: FC<ITotalRecoveredIconProps> = (props: ITotalRecoveredIconProps) => {
    const { width, height } = props
    return (
        <svg width={width ? width : 30} height={height ? height : 30} viewBox='0 0 23 30' fill='none'
             xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M22.0898 6.15234L16.3535 0.410156C16.0898 0.146484 15.7324 0 15.3574 0H15V7.5H22.5V7.14258C22.5 6.77344 22.3535 6.41602 22.0898 6.15234ZM13.125 7.96875V0H1.40625C0.626953 0 0 0.626953 0 1.40625V28.5938C0 29.373 0.626953 30 1.40625 30H21.0938C21.873 30 22.5 29.373 22.5 28.5938V9.375H14.5312C13.7578 9.375 13.125 8.74219 13.125 7.96875ZM16.875 17.3438V20.1562C16.875 20.4141 16.6641 20.625 16.4062 20.625H13.125V23.9062C13.125 24.1641 12.9141 24.375 12.6562 24.375H9.84375C9.58594 24.375 9.375 24.1641 9.375 23.9062V20.625H6.09375C5.83594 20.625 5.625 20.4141 5.625 20.1562V17.3438C5.625 17.0859 5.83594 16.875 6.09375 16.875H9.375V13.5938C9.375 13.3359 9.58594 13.125 9.84375 13.125H12.6562C12.9141 13.125 13.125 13.3359 13.125 13.5938V16.875H16.4062C16.6641 16.875 16.875 17.0859 16.875 17.3438Z'
                fill='#666666' />
        </svg>
    )
}
export default TotalRecoveredIcon