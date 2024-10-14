import { NextRequest } from "next/server";

import * as controller from "../../../server/controllers/ProductController";

export const GET = async (req: NextRequest) => controller.GET(req);
