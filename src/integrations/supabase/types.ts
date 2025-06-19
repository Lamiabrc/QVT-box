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
      enterprise_members: {
        Row: {
          created_at: string
          enterprise_id: string
          id: string
          is_approved: boolean
          role: Database["public"]["Enums"]["enterprise_role_enum"]
          user_id: string
        }
        Insert: {
          created_at?: string
          enterprise_id: string
          id?: string
          is_approved?: boolean
          role: Database["public"]["Enums"]["enterprise_role_enum"]
          user_id: string
        }
        Update: {
          created_at?: string
          enterprise_id?: string
          id?: string
          is_approved?: boolean
          role?: Database["public"]["Enums"]["enterprise_role_enum"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "enterprise_members_enterprise_id_fkey"
            columns: ["enterprise_id"]
            isOneToOne: false
            referencedRelation: "enterprises"
            referencedColumns: ["id"]
          },
        ]
      }
      enterprise_questionnaires: {
        Row: {
          autonomie: number | null
          comments: Json | null
          communication: number | null
          created_at: string | null
          equilibre: number | null
          global_feedback: string | null
          id: string
          recommandations: Json | null
          reconnaissance: number | null
          relations: number | null
          risque: string | null
          score: number | null
          sens: number | null
          stress_level: number | null
          updated_at: string | null
          user_id: string | null
          workload: number | null
        }
        Insert: {
          autonomie?: number | null
          comments?: Json | null
          communication?: number | null
          created_at?: string | null
          equilibre?: number | null
          global_feedback?: string | null
          id?: string
          recommandations?: Json | null
          reconnaissance?: number | null
          relations?: number | null
          risque?: string | null
          score?: number | null
          sens?: number | null
          stress_level?: number | null
          updated_at?: string | null
          user_id?: string | null
          workload?: number | null
        }
        Update: {
          autonomie?: number | null
          comments?: Json | null
          communication?: number | null
          created_at?: string | null
          equilibre?: number | null
          global_feedback?: string | null
          id?: string
          recommandations?: Json | null
          reconnaissance?: number | null
          relations?: number | null
          risque?: string | null
          score?: number | null
          sens?: number | null
          stress_level?: number | null
          updated_at?: string | null
          user_id?: string | null
          workload?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "enterprise_questionnaires_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      enterprises: {
        Row: {
          created_at: string
          created_by: string
          enterprise_code: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          created_by: string
          enterprise_code: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          created_by?: string
          enterprise_code?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      families: {
        Row: {
          created_at: string
          created_by: string
          family_code: string
          id: string
          name: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          created_by: string
          family_code: string
          id?: string
          name: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          family_code?: string
          id?: string
          name?: string
          user_id?: string | null
        }
        Relationships: []
      }
      family_members: {
        Row: {
          created_at: string
          family_id: string
          id: string
          is_approved: boolean
          role: Database["public"]["Enums"]["family_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          family_id: string
          id?: string
          is_approved?: boolean
          role: Database["public"]["Enums"]["family_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          family_id?: string
          id?: string
          is_approved?: boolean
          role?: Database["public"]["Enums"]["family_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "family_members_family_id_fkey"
            columns: ["family_id"]
            isOneToOne: false
            referencedRelation: "families"
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
        Relationships: []
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
        Relationships: []
      }
      profiles: {
        Row: {
          account_type: string | null
          alert_threshold: number | null
          assigned_teen_id: string | null
          created_at: string | null
          department_or_school: string | null
          email: string
          enterprise_id: string | null
          enterprise_role:
            | Database["public"]["Enums"]["enterprise_role_enum"]
            | null
          family_id: string | null
          fonction: string | null
          full_name: string | null
          hr_access: boolean | null
          id: string
          notifications_enabled: boolean | null
          privacy_anonymized: boolean | null
          role: string
          teen_access: boolean | null
          type_poste: string | null
          updated_at: string | null
        }
        Insert: {
          account_type?: string | null
          alert_threshold?: number | null
          assigned_teen_id?: string | null
          created_at?: string | null
          department_or_school?: string | null
          email: string
          enterprise_id?: string | null
          enterprise_role?:
            | Database["public"]["Enums"]["enterprise_role_enum"]
            | null
          family_id?: string | null
          fonction?: string | null
          full_name?: string | null
          hr_access?: boolean | null
          id: string
          notifications_enabled?: boolean | null
          privacy_anonymized?: boolean | null
          role: string
          teen_access?: boolean | null
          type_poste?: string | null
          updated_at?: string | null
        }
        Update: {
          account_type?: string | null
          alert_threshold?: number | null
          assigned_teen_id?: string | null
          created_at?: string | null
          department_or_school?: string | null
          email?: string
          enterprise_id?: string | null
          enterprise_role?:
            | Database["public"]["Enums"]["enterprise_role_enum"]
            | null
          family_id?: string | null
          fonction?: string | null
          full_name?: string | null
          hr_access?: boolean | null
          id?: string
          notifications_enabled?: boolean | null
          privacy_anonymized?: boolean | null
          role?: string
          teen_access?: boolean | null
          type_poste?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_assigned_teen_id_fkey"
            columns: ["assigned_teen_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_enterprise_id_fkey"
            columns: ["enterprise_id"]
            isOneToOne: false
            referencedRelation: "enterprises"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_family_id_fkey"
            columns: ["family_id"]
            isOneToOne: false
            referencedRelation: "families"
            referencedColumns: ["id"]
          },
        ]
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
      team_managers: {
        Row: {
          assigned_at: string
          id: string
          manager_id: string | null
          team_id: string | null
        }
        Insert: {
          assigned_at?: string
          id?: string
          manager_id?: string | null
          team_id?: string | null
        }
        Update: {
          assigned_at?: string
          id?: string
          manager_id?: string | null
          team_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_managers_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      team_members: {
        Row: {
          employee_id: string | null
          id: string
          joined_at: string
          team_id: string | null
        }
        Insert: {
          employee_id?: string | null
          id?: string
          joined_at?: string
          team_id?: string | null
        }
        Update: {
          employee_id?: string | null
          id?: string
          joined_at?: string
          team_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_members_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          company_id: string
          created_at: string
          description: string | null
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          company_id: string
          created_at?: string
          description?: string | null
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          company_id?: string
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          updated_at?: string
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
        Relationships: []
      }
      teen_assessments: {
        Row: {
          comments: Json
          created_at: string
          date: string
          frequency: string
          id: string
          responses: Json
          user_id: string | null
        }
        Insert: {
          comments?: Json
          created_at?: string
          date?: string
          frequency?: string
          id?: string
          responses?: Json
          user_id?: string | null
        }
        Update: {
          comments?: Json
          created_at?: string
          date?: string
          frequency?: string
          id?: string
          responses?: Json
          user_id?: string | null
        }
        Relationships: []
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
        Relationships: []
      }
      teen_notifications: {
        Row: {
          created_at: string | null
          family_id: string | null
          id: number
          message: string
          type: string
          urgent: boolean | null
        }
        Insert: {
          created_at?: string | null
          family_id?: string | null
          id?: number
          message: string
          type: string
          urgent?: boolean | null
        }
        Update: {
          created_at?: string | null
          family_id?: string | null
          id?: number
          message?: string
          type?: string
          urgent?: boolean | null
        }
        Relationships: []
      }
      teen_recommendations: {
        Row: {
          assessment_date: string
          created_at: string
          id: string
          recommendations: Json
          user_id: string | null
        }
        Insert: {
          assessment_date: string
          created_at?: string
          id?: string
          recommendations?: Json
          user_id?: string | null
        }
        Update: {
          assessment_date?: string
          created_at?: string
          id?: string
          recommendations?: Json
          user_id?: string | null
        }
        Relationships: []
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
        Relationships: []
      }
      teens_profiles: {
        Row: {
          created_at: string | null
          email: string
          ethnicity: string | null
          feelsdiscriminated: string | null
          id: string
          ismixed: string | null
          language: string | null
          name: string
          origins: string | null
          religion: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          ethnicity?: string | null
          feelsdiscriminated?: string | null
          id?: string
          ismixed?: string | null
          language?: string | null
          name: string
          origins?: string | null
          religion?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          ethnicity?: string | null
          feelsdiscriminated?: string | null
          id?: string
          ismixed?: string | null
          language?: string | null
          name?: string
          origins?: string | null
          religion?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      teens_questionnaires: {
        Row: {
          anxiete: number | null
          comments: Json | null
          created_at: string | null
          ecrans: number | null
          energie: number | null
          estime: number | null
          global_feedback: string | null
          id: string
          motivation: number | null
          recommandations: Json | null
          relations: number | null
          risque: string | null
          score: number | null
          sommeil: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          anxiete?: number | null
          comments?: Json | null
          created_at?: string | null
          ecrans?: number | null
          energie?: number | null
          estime?: number | null
          global_feedback?: string | null
          id?: string
          motivation?: number | null
          recommandations?: Json | null
          relations?: number | null
          risque?: string | null
          score?: number | null
          sommeil?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          anxiete?: number | null
          comments?: Json | null
          created_at?: string | null
          ecrans?: number | null
          energie?: number | null
          estime?: number | null
          global_feedback?: string | null
          id?: string
          motivation?: number | null
          recommandations?: Json | null
          relations?: number | null
          risque?: string | null
          score?: number | null
          sommeil?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teens_questionnaires_user_id_fkey"
            columns: ["user_id"]
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
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_manager_access_team: {
        Args: { manager_id: string; target_team_id: string }
        Returns: boolean
      }
      get_user_enterprise_role: {
        Args: { target_user_id: string }
        Returns: string
      }
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
      is_user_hr: {
        Args: { target_user_id: string }
        Returns: boolean
      }
      is_user_manager: {
        Args: { target_user_id: string }
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
      enterprise_role_enum: "employee" | "manager" | "hr" | "admin"
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
      enterprise_role_enum: ["employee", "manager", "hr", "admin"],
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
