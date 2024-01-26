export default function Post({ id, title, content, authorName }: { id: number, title: string, content: string, authorName: string }) {
    return (
        <div>
            <h3>{authorName}</h3>
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    )
}