import Link from 'next/link'

export default function PostLinks (props) {
    return (
        <li>
            <Link href="/p/[id]" as={`/p/${props.show.id}`}>
                <a>{props.show.name}</a>
            </Link>
        </li>
    );
};