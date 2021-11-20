interface ContentProps {
  selectedGenre: {
    title: string;
  }
}

export function Content({ selectedGenre }: ContentProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  )
}