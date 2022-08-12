export function Arc(props) {
 return <script async {...props} src={`https://arc.io/widget.min.js#${process.env.NEXT_PUBLIC_ARC_TOKEN}`}></script>;
}
