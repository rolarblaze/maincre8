import { AllInOneValues } from "@/components/Dashboard/SubmitBrief/shared/formTypes/allInOneTypes";
import { BrandDesignValues } from "@/components/Dashboard/SubmitBrief/shared/formTypes/brandDesignTypes";
import { ContentCreationValues } from "@/components/Dashboard/SubmitBrief/shared/formTypes/contentCreationTypes";
import { DigitalMarketingValues } from "@/components/Dashboard/SubmitBrief/shared/formTypes/digitalMarketingTypes";
import { GraphicsDesignValues } from "@/components/Dashboard/SubmitBrief/shared/formTypes/graphicsDesign";

// Defined the FormConfig type
type FormConfig<T> = {
  endpoint: string;
  constructPayload: (payload: T) => Record<string, any>;
};

interface FormTypeMapping {
  digitalMarketing: DigitalMarketingValues;
  graphicsDesign: GraphicsDesignValues;
  brandDesign: BrandDesignValues;
  contentCreation: ContentCreationValues;
  AllInOne: AllInOneValues;
}

// // Utility function to convert payload values to string
const convertToString = (value: unknown): string => {
  if (Array.isArray(value)) {
    return value.join(", ");
  }
  return String(value);
};

export const formConfig: {
  [K in keyof FormTypeMapping]: FormConfig<FormTypeMapping[K]>;
} = {
  digitalMarketing: {
    endpoint: "user/digital-marketing-briefs",
    constructPayload: (payload) => ({
      marketing_objective: convertToString(payload.digitalMarketObj),
      target_audience: convertToString(payload.digitalTargetAudience),
      key_message: convertToString(payload.digitalKeyMessage),
      voice_tone: convertToString(payload.digitalVoiceTone),
      primary_platform: convertToString(payload.digitalPlatform),
      target_action: convertToString(payload.digitalConsumerAction),
      digitalCampaignDur: convertToString(payload.digitalCampaignDur),
    }),
  },

  graphicsDesign: {
    endpoint: "user/graphics-design-briefs",
    constructPayload: (payload) => ({
      design_type: convertToString(payload.graphicsType),
      palette_style: convertToString(payload.graphicsColorPalette),
      uploaded_palette_style: convertToString(
        payload.graphicsColorPaletteDocument,
      ),
      target_audience: convertToString(payload.graphicsTargetAud),
      primary_message: convertToString(payload.graphicsPrimaryMessage),
      design_tone: convertToString(payload.graphicsTone),
      key_deliverables: convertToString(payload.graphicsDeliverable),
      design_references: convertToString(payload.graphicsReferences),
      uploaded_design_references: convertToString(
        payload.graphicsReferencesDocument,
      ),
      timeline: convertToString(payload.graphicsTimeline),
      uploaded_brief: convertToString(payload.document),
    }),
  },

  brandDesign: {
    endpoint: "user/brand-design-briefs",
    constructPayload: (payload) => ({
      core_value: convertToString(payload.brandCoreValue),
      target_market: convertToString(payload.brandMarket),
      brand_tone: convertToString(payload.brandPersonality),
      brand_assets: convertToString(payload.brandAsset),
      key_deliverables: convertToString(payload.brandDeliverable),
      kpis: convertToString(payload.brandKPI),
      reference_brands: convertToString(payload.brandCompetitors),
      guidelines: convertToString(payload.brandGuidelines),
      uploaded_file: convertToString(payload.brandCompetitorsDocument),
      uploaded_brief: convertToString(payload.document),
    }),
  },
  contentCreation: {
    endpoint: "user/content-creation-briefs",
    constructPayload: (payload) => ({
      content_type: convertToString(payload.contentType),
      primary_goal: convertToString(payload.contentGoal),
      target_audience: convertToString(payload.contentAudience),
      content_tone: convertToString(payload.contentTone),
      keywords: convertToString(payload.contentKeywords),
      content_length: convertToString(payload.contentLength),
      guidelines: convertToString(payload.contentSpecificGuidelines),
      cta: convertToString(payload.contentCTA),
      kpis: convertToString(payload.contentKPI),
      delivery_timeline: convertToString(payload.contentTimeline),
      uploaded_brief: convertToString(payload.document),
    }),
  },
  AllInOne: {
    endpoint: "user/content-creation-briefs",
    constructPayload: (payload) => ({
      project_goals: convertToString(payload.allInOneGoal),
      target_audience: convertToString(payload.allInOneAudience),
      kpis: convertToString(payload.allInOneKPI),
      brand_tone: convertToString(payload.allInOnePersonality),
      style_guide: convertToString(payload.allInOneBrandColor),
      content_length: convertToString(payload.allInOneBrandColorDocument),
      guidelines: convertToString(payload.allInOneBrandAdmire),
      primary_platform: convertToString(payload.allInOnePlatform),
      keywords: convertToString(payload.allInOneKeywords),
      competitors_website: convertToString(payload.allInOneCompetitorsWebsite),
      content_tone: convertToString(payload.allInOneContentStyle),
      uploaded_brief: convertToString(payload.document),
    }),
  },
  // Add more forms as needed
};
