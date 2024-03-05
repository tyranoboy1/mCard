import ListRow from '@/common/components/ListRow'

const CardList = () => {
  return (
    <div>
      <ul>
        <ListRow
          left={<div>left</div>}
          contents={<ListRow.Texts title="타이틀" subTitle="서브 타이틀" />}
          right={<div>right</div>}
          withArrow={true}
        />
      </ul>
    </div>
  )
}

export default CardList
