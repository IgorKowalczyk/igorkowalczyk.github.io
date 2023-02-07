import { GetPopular } from "lib/graphQl";

export default async function handler(_, res) {
 const data = await GetPopular();
 res.status(200).json(data.repositories.edges);
}
