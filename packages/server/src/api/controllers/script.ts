import { Ctx } from "@budibase/types"
import { VM2 } from "../../jsRunner/vm"

export async function execute(ctx: Ctx) {
  const { script, context } = ctx.request.body
  const runner = new VM2(context)
  const result = runner.execute(script)
  ctx.body = result
}

export async function save(ctx: Ctx) {
  ctx.throw(501, "Not currently implemented")
}
