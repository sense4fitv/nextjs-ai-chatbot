ALTER TABLE "User" ADD COLUMN "coachId" uuid;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "User" ADD CONSTRAINT "User_coachId_Coach_id_fk" FOREIGN KEY ("coachId") REFERENCES "public"."Coach"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
