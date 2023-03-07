import { ImageLoader } from "components/elements/Loaders";

export default function Loader() {
 return Array.from({ length: 6 }, (_, i) => <ImageLoader key={i} />);
}
