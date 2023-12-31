import cn from 'clsx'
import { FC } from 'react'

import ButtonText from '../button/buttonText/ButtonText'

import styles from './InfoBox.module.scss'

interface IInfoBoxProps {
	title?: string
	text: string
	size: string
	button?: boolean
	onClick?: () => any
}

const InfoBox: FC<IInfoBoxProps> = ({
	title = '',
	text,
	size,
	button = true,
	onClick
}) => {
	return (
		<div className={cn(styles.wrapper, styles[size])}>
			{title && <h2 className={styles.title}>{title}</h2>}
			<p>{text}</p>
			{button && (
				<div className={styles.button}>
					<ButtonText clickHandler={onClick}>Продолжить</ButtonText>
				</div>
			)}
		</div>
	)
}

export default InfoBox
