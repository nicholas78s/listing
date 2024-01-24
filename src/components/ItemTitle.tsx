export type ItemTitleType = {
  title: string | undefined;
}

export const ItemTitle = ({title}: ItemTitleType) => {
  let shortTitle = title ? (title.slice(0, 50) + '...').slice(0, title.length)  : '';
  return (
    <p className="item-title">{shortTitle}</p>
  )
}
