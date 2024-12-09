import supabase from "@/utils/supabase";

export async function getSchedule(from: string, dest: string) {
  if (from && dest) {
    const { data: posts } = await supabase
      .from("jadwal_keberangkatan")
      .select("*, id_kereta(*, id_kelas_kereta(*))")
      .ilike("asal_keberangkatan", from)
      .ilike("tujuan_keberangkatan", dest);
    return posts;
  }
  const { data: posts } = await supabase
    .from("jadwal_keberangkatan")
    .select("*, id_kereta(*, id_kelas_kereta(*))");
  return posts;
}

export async function getScheduleDetail(id: string) {
  const { data: posts } = await supabase
    .from("jadwal_keberangkatan")
    .select("*, id_kereta!inner(*, id_kelas_kereta!inner(*))")
    .eq("id_jadwal_keberangkatan", id);
  return posts;
}
