import { Database } from "@/lib/database.type";

declare global {
  type ScheduleList = Database["public"]["Tables"]["jadwal_keberangkatan"]["Row"];
  type HistoryDetail = Database["public"]["Tables"]["pemesanan"]["Row"];
}
