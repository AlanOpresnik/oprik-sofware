export interface Include {
  title: string;
}

export interface Course {
  outstanding: boolean;
  new?: boolean; // Propiedad opcional
  title: string;
  includes: Include[];
  introduction: string;
  requirements_acordion: string;
  upTitle: string;
  course_things_acordion?: {
    title: string
  }[];
  final_proyect_preview?: {
    description?:string;
    video_preview_url?: string[];
  }
  movile_title: string;
  description: string;
  img?: string;
  slug: string;
  price: number;
  requirements: {
    dedication: string;
    prev_knowledge: string;
    duration: string;
  }[];
  pdf?: string;
  icons?:
  {
    icon: string;
  }[];

}

export interface CourseProps {
  course: Course
}