export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      akun: {
        Row: {
          created_at: string | null;
          id_akun: string;
          id_pengguna: string | null;
          token: string | null;
        };
        Insert: {
          created_at?: string | null;
          id_akun: string;
          id_pengguna?: string | null;
          token?: string | null;
        };
        Update: {
          created_at?: string | null;
          id_akun?: string;
          id_pengguna?: string | null;
          token?: string | null;
        };
        Relationships: [];
      };
      data_penumpang: {
        Row: {
          created_at: string | null;
          id_data_penumpang: string;
          id_pemesanan: number | null;
          jenis_kelamin: string | null;
          nama_penumpang: string;
          nik: string | null;
          tanggal_lahir: string | null;
        };
        Insert: {
          created_at?: string | null;
          id_data_penumpang: string;
          id_pemesanan?: number | null;
          jenis_kelamin?: string | null;
          nama_penumpang: string;
          nik?: string | null;
          tanggal_lahir?: string | null;
        };
        Update: {
          created_at?: string | null;
          id_data_penumpang?: string;
          id_pemesanan?: number | null;
          jenis_kelamin?: string | null;
          nama_penumpang?: string;
          nik?: string | null;
          tanggal_lahir?: string | null;
        };
        Relationships: [];
      };
      jadwal_keberangkatan: {
        Row: {
          asal_keberangkatan: string | null;
          created_at: string | null;
          harga: number | null;
          id_jadwal_keberangkatan: string;
          jam_keberangkatan: string | null;
          jam_pulangan: string | null;
          tanggal_keberangkatan: string | null;
          tanggal_pulangan: string | null;
          total_pemesanan: number | null;
          tujuan_keberangkatan: string | null;
          id_kereta: {
            created_at: string | null;
            id_kereta: string;
            nama_kereta: string | null;
            nama_perusahaan: string | null;
            total_kursi: number | null;
            id_kelas_kereta: {
              created_at: string | null;
              id_kelas_kereta: string;
              tipe_kelas: string | null;
            };
          };
        };
        Insert: {
          asal_keberangkatan?: string | null;
          created_at?: string | null;
          harga?: number | null;
          id_jadwal_keberangkatan?: string;
          id_kereta?: string | null;
          jam_keberangkatan?: string | null;
          jam_pulangan?: string | null;
          tanggal_keberangkatan?: string | null;
          tanggal_pulangan?: string | null;
          total_pemesanan?: number | null;
          tujuan_keberangkatan?: string | null;
        };
        Update: {
          asal_keberangkatan?: string | null;
          created_at?: string | null;
          harga?: number | null;
          id_jadwal_keberangkatan?: string;
          id_kereta?: string | null;
          jam_keberangkatan?: string | null;
          jam_pulangan?: string | null;
          tanggal_keberangkatan?: string | null;
          tanggal_pulangan?: string | null;
          total_pemesanan?: number | null;
          tujuan_keberangkatan?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "jadwal_keberangkatan_id_kereta_fkey";
            columns: ["id_kereta"];
            isOneToOne: false;
            referencedRelation: "kereta";
            referencedColumns: ["id_kereta"];
          }
        ];
      };
      kelas_kereta: {
        Row: {
          created_at: string | null;
          id_kelas_kereta: string;
          tipe_kelas: string | null;
        };
        Insert: {
          created_at?: string | null;
          id_kelas_kereta?: string;
          tipe_kelas?: string | null;
        };
        Update: {
          created_at?: string | null;
          id_kelas_kereta?: string;
          tipe_kelas?: string | null;
        };
        Relationships: [];
      };
      kereta: {
        Row: {
          created_at: string | null;
          id_kelas_kereta: string | null;
          id_kereta: string;
          nama_kereta: string | null;
          nama_perusahaan: string | null;
          total_kursi: number | null;
        };
        Insert: {
          created_at?: string | null;
          id_kelas_kereta?: string | null;
          id_kereta?: string;
          nama_kereta?: string | null;
          nama_perusahaan?: string | null;
          total_kursi?: number | null;
        };
        Update: {
          created_at?: string | null;
          id_kelas_kereta?: string | null;
          id_kereta?: string;
          nama_kereta?: string | null;
          nama_perusahaan?: string | null;
          total_kursi?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "kereta_id_kelas_kereta_fkey";
            columns: ["id_kelas_kereta"];
            isOneToOne: false;
            referencedRelation: "kelas_kereta";
            referencedColumns: ["id_kelas_kereta"];
          }
        ];
      };
      pembayaran: {
        Row: {
          bukti_pembayaran: string | null;
          created_at: string | null;
          id_pembayaran: string;
          id_status: string | null;
          metode_pembayaran: string | null;
          tanggal_pembayaran: string | null;
        };
        Insert: {
          bukti_pembayaran?: string | null;
          created_at?: string | null;
          id_pembayaran: string;
          id_status?: string | null;
          metode_pembayaran?: string | null;
          tanggal_pembayaran?: string | null;
        };
        Update: {
          bukti_pembayaran?: string | null;
          created_at?: string | null;
          id_pembayaran?: string;
          id_status?: string | null;
          metode_pembayaran?: string | null;
          tanggal_pembayaran?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "pembayaran_id_status_fkey";
            columns: ["id_status"];
            isOneToOne: false;
            referencedRelation: "status_transaksi";
            referencedColumns: ["id_status"];
          }
        ];
      };
      pemesanan: {
        Row: {
          created_at: string | null;
          id_data_penumpang: {
            created_at: string | null;
            id_data_penumpang: string;
            id_pemesanan: number | null;
            jenis_kelamin: string | null;
            nama_penumpang: string;
            nik: string | null;
            tanggal_lahir: string | null;
          };
          id_jadwal_keberangkatan: {
            asal_keberangkatan: string | null;
            created_at: string | null;
            harga: number | null;
            id_jadwal_keberangkatan: string;
            jam_keberangkatan: string | null;
            jam_pulangan: string | null;
            tanggal_keberangkatan: string | null;
            tanggal_pulangan: string | null;
            total_pemesanan: number | null;
            tujuan_keberangkatan: string | null;
            id_kereta: {
              created_at: string | null;
              id_kereta: string;
              nama_kereta: string | null;
              nama_perusahaan: string | null;
              total_kursi: number | null;
              id_kelas_kereta: {
                created_at: string | null;
                id_kelas_kereta: string;
                tipe_kelas: string | null;
              };
            };
          };
          id_pembayaran: {
            bukti_pembayaran: string | null;
            created_at: string | null;
            id_pembayaran: string;
            id_status: string | null;
            metode_pembayaran: string | null;
            tanggal_pembayaran: string | null;
          };
          id_pemesanan: string;
          id_status: {
            created_at: string | null;
            id_status: string;
            status: string | null;
          };
        };
        Insert: {
          created_at?: string | null;
          id_data_penumpang?: string | null;
          id_jadwal_keberangkatan?: string | null;
          id_pembayaran?: string | null;
          id_pemesanan: string;
          id_status?: string | null;
        };
        Update: {
          created_at?: string | null;
          id_data_penumpang?: string | null;
          id_jadwal_keberangkatan?: string | null;
          id_pembayaran?: string | null;
          id_pemesanan?: string;
          id_status?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "pemesanan_id_data_penumpang_fkey";
            columns: ["id_data_penumpang"];
            isOneToOne: false;
            referencedRelation: "data_penumpang";
            referencedColumns: ["id_data_penumpang"];
          },
          {
            foreignKeyName: "pemesanan_id_jadwal_keberangkatan_fkey";
            columns: ["id_jadwal_keberangkatan"];
            isOneToOne: false;
            referencedRelation: "jadwal_keberangkatan";
            referencedColumns: ["id_jadwal_keberangkatan"];
          },
          {
            foreignKeyName: "pemesanan_id_pembayaran_fkey";
            columns: ["id_pembayaran"];
            isOneToOne: false;
            referencedRelation: "pembayaran";
            referencedColumns: ["id_pembayaran"];
          },
          {
            foreignKeyName: "pemesanan_id_status_fkey";
            columns: ["id_status"];
            isOneToOne: false;
            referencedRelation: "status_transaksi";
            referencedColumns: ["id_status"];
          }
        ];
      };
      pengguna: {
        Row: {
          created_at: string | null;
          email: string;
          id_pengguna: string;
          kata_sandi: string;
          nama: string | null;
          role: string | null;
        };
        Insert: {
          created_at?: string | null;
          email: string;
          id_pengguna: string;
          kata_sandi: string;
          nama?: string | null;
          role?: string | null;
        };
        Update: {
          created_at?: string | null;
          email?: string;
          id_pengguna?: string;
          kata_sandi?: string;
          nama?: string | null;
          role?: string | null;
        };
        Relationships: [];
      };
      status_transaksi: {
        Row: {
          created_at: string | null;
          id_status: string;
          status: string | null;
        };
        Insert: {
          created_at?: string | null;
          id_status: string;
          status?: string | null;
        };
        Update: {
          created_at?: string | null;
          id_status?: string;
          status?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
  ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;
