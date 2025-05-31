export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admin_content: {
        Row: {
          created_at: string
          description: string | null
          id: string
          key: string
          page: string | null
          section: string | null
          type: string
          updated_at: string
          updated_by: string | null
          value: Json
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          key: string
          page?: string | null
          section?: string | null
          type: string
          updated_at?: string
          updated_by?: string | null
          value: Json
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          key?: string
          page?: string | null
          section?: string | null
          type?: string
          updated_at?: string
          updated_by?: string | null
          value?: Json
        }
        Relationships: []
      }
      cities: {
        Row: {
          country_id: number
          id: number
          name: string
        }
        Insert: {
          country_id: number
          id?: never
          name: string
        }
        Update: {
          country_id?: number
          id?: never
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "cities_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
        ]
      }
      countries: {
        Row: {
          code: string
          id: number
          name: string
        }
        Insert: {
          code: string
          id?: never
          name: string
        }
        Update: {
          code?: string
          id?: never
          name?: string
        }
        Relationships: []
      }
      family_connections: {
        Row: {
          approved_at: string | null
          created_at: string | null
          family_code: string
          id: string
          parent_id: string | null
          role: Database["public"]["Enums"]["family_role"]
          teen_id: string | null
        }
        Insert: {
          approved_at?: string | null
          created_at?: string | null
          family_code: string
          id?: string
          parent_id?: string | null
          role: Database["public"]["Enums"]["family_role"]
          teen_id?: string | null
        }
        Update: {
          approved_at?: string | null
          created_at?: string | null
          family_code?: string
          id?: string
          parent_id?: string | null
          role?: Database["public"]["Enums"]["family_role"]
          teen_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "family_connections_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "family_connections_teen_id_fkey"
            columns: ["teen_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      metrics: {
        Row: {
          event: string
          id: string
          timestamp: string | null
          user_id: string | null
          value: string | null
        }
        Insert: {
          event: string
          id?: string
          timestamp?: string | null
          user_id?: string | null
          value?: string | null
        }
        Update: {
          event?: string
          id?: string
          timestamp?: string | null
          user_id?: string | null
          value?: string | null
        }
        Relationships: []
      }
      monthly_boxes: {
        Row: {
          box_theme: string
          created_at: string | null
          customization_notes: string | null
          id: string
          products: Json
          rating: number | null
          received_at: string | null
          shipped_at: string | null
          teen_id: string | null
        }
        Insert: {
          box_theme: string
          created_at?: string | null
          customization_notes?: string | null
          id?: string
          products?: Json
          rating?: number | null
          received_at?: string | null
          shipped_at?: string | null
          teen_id?: string | null
        }
        Update: {
          box_theme?: string
          created_at?: string | null
          customization_notes?: string | null
          id?: string
          products?: Json
          rating?: number | null
          received_at?: string | null
          shipped_at?: string | null
          teen_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "monthly_boxes_teen_id_fkey"
            columns: ["teen_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      parent_checkins: {
        Row: {
          communication_quality: number | null
          concern_level: number | null
          created_at: string | null
          date: string
          id: string
          notes: string | null
          parent_id: string | null
          support_feeling: number | null
          teen_id: string | null
        }
        Insert: {
          communication_quality?: number | null
          concern_level?: number | null
          created_at?: string | null
          date?: string
          id?: string
          notes?: string | null
          parent_id?: string | null
          support_feeling?: number | null
          teen_id?: string | null
        }
        Update: {
          communication_quality?: number | null
          concern_level?: number | null
          created_at?: string | null
          date?: string
          id?: string
          notes?: string | null
          parent_id?: string | null
          support_feeling?: number | null
          teen_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "parent_checkins_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "parent_checkins_teen_id_fkey"
            columns: ["teen_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          account_type: Database["public"]["Enums"]["account_type"]
          age: number | null
          avatar_url: string | null
          company_size: string | null
          created_at: string | null
          email: string
          entreprise: string | null
          family_code: string | null
          full_name: string | null
          id: string
          industry: string | null
          preferred_name: string | null
          role: string
          subscription_plan:
            | Database["public"]["Enums"]["subscription_plan"]
            | null
          subscription_status: string | null
        }
        Insert: {
          account_type: Database["public"]["Enums"]["account_type"]
          age?: number | null
          avatar_url?: string | null
          company_size?: string | null
          created_at?: string | null
          email: string
          entreprise?: string | null
          family_code?: string | null
          full_name?: string | null
          id: string
          industry?: string | null
          preferred_name?: string | null
          role: string
          subscription_plan?:
            | Database["public"]["Enums"]["subscription_plan"]
            | null
          subscription_status?: string | null
        }
        Update: {
          account_type?: Database["public"]["Enums"]["account_type"]
          age?: number | null
          avatar_url?: string | null
          company_size?: string | null
          created_at?: string | null
          email?: string
          entreprise?: string | null
          family_code?: string | null
          full_name?: string | null
          id?: string
          industry?: string | null
          preferred_name?: string | null
          role?: string
          subscription_plan?:
            | Database["public"]["Enums"]["subscription_plan"]
            | null
          subscription_status?: string | null
        }
        Relationships: []
      }
      simulator_responses: {
        Row: {
          answers: Json
          burnout_risk: string
          burnout_risk_percentage: number
          context: string
          created_at: string | null
          happiness_score: number | null
          id: string
          qvt_score: number
          user_id: string | null
        }
        Insert: {
          answers: Json
          burnout_risk: string
          burnout_risk_percentage: number
          context: string
          created_at?: string | null
          happiness_score?: number | null
          id?: string
          qvt_score: number
          user_id?: string | null
        }
        Update: {
          answers?: Json
          burnout_risk?: string
          burnout_risk_percentage?: number
          context?: string
          created_at?: string | null
          happiness_score?: number | null
          id?: string
          qvt_score?: number
          user_id?: string | null
        }
        Relationships: []
      }
      team_insights: {
        Row: {
          anonymous: boolean | null
          content: string
          created_at: string | null
          id: string
          priority: string
          team_id: string
          type: string
          user_id: string | null
        }
        Insert: {
          anonymous?: boolean | null
          content: string
          created_at?: string | null
          id?: string
          priority?: string
          team_id: string
          type: string
          user_id?: string | null
        }
        Update: {
          anonymous?: boolean | null
          content?: string
          created_at?: string | null
          id?: string
          priority?: string
          team_id?: string
          type?: string
          user_id?: string | null
        }
        Relationships: []
      }
      teen_alerts: {
        Row: {
          alert_type: Database["public"]["Enums"]["alert_type"]
          created_at: string | null
          id: string
          is_read: boolean | null
          location: string | null
          message: string | null
          parent_id: string | null
          teen_id: string | null
        }
        Insert: {
          alert_type: Database["public"]["Enums"]["alert_type"]
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          location?: string | null
          message?: string | null
          parent_id?: string | null
          teen_id?: string | null
        }
        Update: {
          alert_type?: Database["public"]["Enums"]["alert_type"]
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          location?: string | null
          message?: string | null
          parent_id?: string | null
          teen_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teen_alerts_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teen_alerts_teen_id_fkey"
            columns: ["teen_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      teen_checkins: {
        Row: {
          academic_pressure: number | null
          created_at: string | null
          date: string
          family_relationship: number | null
          id: string
          mood: Database["public"]["Enums"]["teen_mood"]
          personal_notes: string | null
          sleep_quality: number | null
          social_interaction: number | null
          stress_level: number | null
          teen_id: string | null
        }
        Insert: {
          academic_pressure?: number | null
          created_at?: string | null
          date?: string
          family_relationship?: number | null
          id?: string
          mood: Database["public"]["Enums"]["teen_mood"]
          personal_notes?: string | null
          sleep_quality?: number | null
          social_interaction?: number | null
          stress_level?: number | null
          teen_id?: string | null
        }
        Update: {
          academic_pressure?: number | null
          created_at?: string | null
          date?: string
          family_relationship?: number | null
          id?: string
          mood?: Database["public"]["Enums"]["teen_mood"]
          personal_notes?: string | null
          sleep_quality?: number | null
          social_interaction?: number | null
          stress_level?: number | null
          teen_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teen_checkins_teen_id_fkey"
            columns: ["teen_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      teen_rewards: {
        Row: {
          description: string | null
          earned_at: string | null
          id: string
          points: number
          reward_type: string
          teen_id: string | null
        }
        Insert: {
          description?: string | null
          earned_at?: string | null
          id?: string
          points?: number
          reward_type: string
          teen_id?: string | null
        }
        Update: {
          description?: string | null
          earned_at?: string | null
          id?: string
          points?: number
          reward_type?: string
          teen_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teen_rewards_teen_id_fkey"
            columns: ["teen_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_feedback: {
        Row: {
          burnout_risk: string | null
          created_at: string | null
          feedback_type: string
          id: string
          qvt_score: number | null
          user_id: string | null
        }
        Insert: {
          burnout_risk?: string | null
          created_at?: string | null
          feedback_type: string
          id?: string
          qvt_score?: number | null
          user_id?: string | null
        }
        Update: {
          burnout_risk?: string | null
          created_at?: string | null
          feedback_type?: string
          id?: string
          qvt_score?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          user_id?: string
        }
        Relationships: []
      }
      virtual_gifts: {
        Row: {
          created_at: string | null
          gift_image_url: string | null
          gift_name: string
          id: string
          message: string | null
          receiver_id: string | null
          sender_id: string | null
        }
        Insert: {
          created_at?: string | null
          gift_image_url?: string | null
          gift_name: string
          id?: string
          message?: string | null
          receiver_id?: string | null
          sender_id?: string | null
        }
        Update: {
          created_at?: string | null
          gift_image_url?: string | null
          gift_name?: string
          id?: string
          message?: string | null
          receiver_id?: string | null
          sender_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "virtual_gifts_receiver_id_fkey"
            columns: ["receiver_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "virtual_gifts_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_role: {
        Args: { user_id: string }
        Returns: string
      }
      is_admin: {
        Args: Record<PropertyKey, never> | { user_id: string }
        Returns: boolean
      }
      is_user_admin: {
        Args: { user_id: string }
        Returns: boolean
      }
      setup_qvt_database: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      validate_user_access: {
        Args: { target_user_id: string }
        Returns: boolean
      }
    }
    Enums: {
      account_type:
        | "abonne_salarie"
        | "administrateur_entreprise"
        | "particulier_travailleur"
      alert_type:
        | "party"
        | "drinking"
        | "danger"
        | "lost"
        | "happy"
        | "with_friends"
        | "need_help"
      family_role: "parent" | "teen" | "sibling"
      subscription_plan: "basic" | "premium" | "family"
      teen_mood:
        | "very_happy"
        | "happy"
        | "neutral"
        | "sad"
        | "very_sad"
        | "anxious"
        | "stressed"
      user_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      account_type: [
        "abonne_salarie",
        "administrateur_entreprise",
        "particulier_travailleur",
      ],
      alert_type: [
        "party",
        "drinking",
        "danger",
        "lost",
        "happy",
        "with_friends",
        "need_help",
      ],
      family_role: ["parent", "teen", "sibling"],
      subscription_plan: ["basic", "premium", "family"],
      teen_mood: [
        "very_happy",
        "happy",
        "neutral",
        "sad",
        "very_sad",
        "anxious",
        "stressed",
      ],
      user_role: ["admin", "user"],
    },
  },
} as const
