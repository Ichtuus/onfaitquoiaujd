import { z } from 'zod';

export const basicFormValidationSchema = z.object({
	town: z.string(),
	meta: z.string().optional(),
	isVirtual: z.boolean().optional(),
	start: z.enum(['today', 'tomorrow', 'week', 'weekend', 'next_week', 'month', 'next_month']).optional()
});
