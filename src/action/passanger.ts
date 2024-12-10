import supabase from "@/utils/supabase";

export async function insertPassangerInformation({
  name,
  gender,
  nik,
  date,
  orderId,
}: {
  name: string;
  gender: string;
  nik: string;
  date: string | Date;
  orderId: string;
}) {
  const { data, error } = await supabase.from("data_penumpang").insert({
    nama_penumpang: name,
    jenis_kelamin: gender,
    nik: nik,
    tanggal_lahir: date,
  });

  return { data, error };
}

export async function getPassanger() {
  const { data: posts } = await supabase
    .from("data_penumpang")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1);
  return posts;
}
