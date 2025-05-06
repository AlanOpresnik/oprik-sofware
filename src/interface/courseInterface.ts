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
    description?: string;
    video_preview_url?: string[];
  }
  start_date: string;
  end_date: string;
  days_course: string;
  hours_course: string;
  movile_title: string;
  description: string;
  instructors: { name: string, bio: string, image: string, role: string }[];
  img?: string;
  slug: string;
  modules: { title: string; lessons: number; topics: string[] }[]
  price: number;
  banner?: string;
  requirements: {
    dedication: string;
    prev_knowledge: string;
    duration: string;
    pdf?: string;
  }[];
  icons?:
  {
    icon: string;
  }[];

}

export interface CourseProps {
  course: Course
}