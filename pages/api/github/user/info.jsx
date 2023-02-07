import { GetUserData } from "/lib/graphQl";

export default async function handler(req, res) {
 const user = await GetUserData();
 res.status(200).json(user);
}
