export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      achievements: {
        Row: {
          category: string
          created_at: string
          date_label: string
          description: string
          featured: boolean
          id: string
          image_alt: string
          image_url: string
          link_label: string
          link_url: string
          organization: string
          sort_order: number
          tags: string[]
          title: string
          updated_at: string
        }
        Insert: {
          category?: string
          created_at?: string
          date_label?: string
          description?: string
          featured?: boolean
          id?: string
          image_alt?: string
          image_url?: string
          link_label?: string
          link_url?: string
          organization?: string
          sort_order?: number
          tags?: string[]
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          date_label?: string
          description?: string
          featured?: boolean
          id?: string
          image_alt?: string
          image_url?: string
          link_label?: string
          link_url?: string
          organization?: string
          sort_order?: number
          tags?: string[]
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      artworks: {
        Row: {
          category: string
          created_at: string
          description: string
          featured: boolean
          id: string
          image_alt: string
          image_url: string
          medium: string
          sort_order: number
          tags: string[]
          title: string
          updated_at: string
          year: string
        }
        Insert: {
          category?: string
          created_at?: string
          description?: string
          featured?: boolean
          id?: string
          image_alt?: string
          image_url?: string
          medium?: string
          sort_order?: number
          tags?: string[]
          title: string
          updated_at?: string
          year?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string
          featured?: boolean
          id?: string
          image_alt?: string
          image_url?: string
          medium?: string
          sort_order?: number
          tags?: string[]
          title?: string
          updated_at?: string
          year?: string
        }
        Relationships: []
      }
      certifications: {
        Row: {
          category: string
          created_at: string
          credential_id: string
          credential_url: string
          date_label: string
          description: string
          featured: boolean
          id: string
          image_alt: string
          image_url: string
          issuer: string
          sort_order: number
          tags: string[]
          title: string
          updated_at: string
        }
        Insert: {
          category?: string
          created_at?: string
          credential_id?: string
          credential_url?: string
          date_label?: string
          description?: string
          featured?: boolean
          id?: string
          image_alt?: string
          image_url?: string
          issuer?: string
          sort_order?: number
          tags?: string[]
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          credential_id?: string
          credential_url?: string
          date_label?: string
          description?: string
          featured?: boolean
          id?: string
          image_alt?: string
          image_url?: string
          issuer?: string
          sort_order?: number
          tags?: string[]
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          created_at: string
          email: string
          id: string
          interest: string
          is_read: boolean
          message: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          interest?: string
          is_read?: boolean
          message: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          interest?: string
          is_read?: boolean
          message?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      experiences: {
        Row: {
          created_at: string
          date_range: string
          description: string
          featured: boolean
          id: string
          image_alt: string
          image_url: string
          link_url: string
          location: string
          organization: string
          responsibilities: string[]
          role: string
          sort_order: number
          technologies: string[]
          title: string
          type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          date_range?: string
          description?: string
          featured?: boolean
          id?: string
          image_alt?: string
          image_url?: string
          link_url?: string
          location?: string
          organization?: string
          responsibilities?: string[]
          role?: string
          sort_order?: number
          technologies?: string[]
          title: string
          type?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          date_range?: string
          description?: string
          featured?: boolean
          id?: string
          image_alt?: string
          image_url?: string
          link_url?: string
          location?: string
          organization?: string
          responsibilities?: string[]
          role?: string
          sort_order?: number
          technologies?: string[]
          title?: string
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          category: string
          created_at: string
          description: string
          development: string
          featured: boolean
          features: string[]
          github_url: string
          id: string
          image_alt: string
          image_url: string
          learnings: string[]
          live_url: string
          overview: string
          problem: string
          screenshots: string[]
          slug: string
          solution: string
          sort_order: number
          technologies: string[]
          title: string
          updated_at: string
        }
        Insert: {
          category?: string
          created_at?: string
          description?: string
          development?: string
          featured?: boolean
          features?: string[]
          github_url?: string
          id?: string
          image_alt?: string
          image_url?: string
          learnings?: string[]
          live_url?: string
          overview?: string
          problem?: string
          screenshots?: string[]
          slug: string
          solution?: string
          sort_order?: number
          technologies?: string[]
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string
          development?: string
          featured?: boolean
          features?: string[]
          github_url?: string
          id?: string
          image_alt?: string
          image_url?: string
          learnings?: string[]
          live_url?: string
          overview?: string
          problem?: string
          screenshots?: string[]
          slug?: string
          solution?: string
          sort_order?: number
          technologies?: string[]
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      resumes: {
        Row: {
          created_at: string
          featured: boolean
          file_path: string
          file_url: string
          id: string
          is_active: boolean
          sort_order: number
          title: string
          updated_at: string
          updated_label: string
        }
        Insert: {
          created_at?: string
          featured?: boolean
          file_path?: string
          file_url: string
          id?: string
          is_active?: boolean
          sort_order?: number
          title?: string
          updated_at?: string
          updated_label?: string
        }
        Update: {
          created_at?: string
          featured?: boolean
          file_path?: string
          file_url?: string
          id?: string
          is_active?: boolean
          sort_order?: number
          title?: string
          updated_at?: string
          updated_label?: string
        }
        Relationships: []
      }
      site_content: {
        Row: {
          about_bio: string[]
          about_image_alt: string
          about_image_url: string
          about_intro: string
          art_portfolio_url: string
          contact_email: string
          created_at: string
          currently: string[]
          education_degree: string
          education_institution: string
          education_status: string
          featured: boolean
          hero_description: string
          hero_disciplines: string
          hero_eyebrow: string
          hero_first_name: string
          hero_last_name: string
          hero_role: string
          id: string
          key: string
          looking_for: string
          sort_order: number
          updated_at: string
          whatsapp_number: string
        }
        Insert: {
          about_bio?: string[]
          about_image_alt?: string
          about_image_url?: string
          about_intro?: string
          art_portfolio_url?: string
          contact_email?: string
          created_at?: string
          currently?: string[]
          education_degree?: string
          education_institution?: string
          education_status?: string
          featured?: boolean
          hero_description?: string
          hero_disciplines?: string
          hero_eyebrow?: string
          hero_first_name?: string
          hero_last_name?: string
          hero_role?: string
          id?: string
          key?: string
          looking_for?: string
          sort_order?: number
          updated_at?: string
          whatsapp_number?: string
        }
        Update: {
          about_bio?: string[]
          about_image_alt?: string
          about_image_url?: string
          about_intro?: string
          art_portfolio_url?: string
          contact_email?: string
          created_at?: string
          currently?: string[]
          education_degree?: string
          education_institution?: string
          education_status?: string
          featured?: boolean
          hero_description?: string
          hero_disciplines?: string
          hero_eyebrow?: string
          hero_first_name?: string
          hero_last_name?: string
          hero_role?: string
          id?: string
          key?: string
          looking_for?: string
          sort_order?: number
          updated_at?: string
          whatsapp_number?: string
        }
        Relationships: []
      }
      skills: {
        Row: {
          created_at: string
          description: string
          featured: boolean
          id: string
          image_alt: string
          image_url: string
          skills: string[]
          sort_order: number
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string
          featured?: boolean
          id?: string
          image_alt?: string
          image_url?: string
          skills?: string[]
          sort_order?: number
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          featured?: boolean
          id?: string
          image_alt?: string
          image_url?: string
          skills?: string[]
          sort_order?: number
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      social_links: {
        Row: {
          created_at: string
          featured: boolean
          id: string
          label: string
          platform: string
          sort_order: number
          updated_at: string
          url: string
        }
        Insert: {
          created_at?: string
          featured?: boolean
          id?: string
          label: string
          platform: string
          sort_order?: number
          updated_at?: string
          url?: string
        }
        Update: {
          created_at?: string
          featured?: boolean
          id?: string
          label?: string
          platform?: string
          sort_order?: number
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      admin_exists: { Args: never; Returns: boolean }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin"],
    },
  },
} as const
