import { FC } from 'react'
import styles from '../../cards.module.scss'

interface TagsProps {
  tags: string
}

const Tags: FC<TagsProps> = ({ tags }) => {
  let tagsArray: string[] = []

  if (tags) {
    tagsArray = tags.split(',').filter((el) => el !== '')
  }

  return (
    <div className={styles.tags__block}>
      {tagsArray.length
        ? tagsArray.map((el) => (
            <span key={el} className={styles.tag}>
              {el}
            </span>
          ))
        : null}
    </div>
  )
}

export default Tags
