export interface ExerciseSet {
    reps: number;
    charge?: number | "Bodyweight";
    feeling: "Easy" | "Ok" | "Hard" | "Failure";
    notes?: string; // Optional notes for set
}

export interface Exercise {
    name: string;
    sets: ExerciseSet[];
    notes?: string;
}

export interface Session {
    id: string;
    name: string; 
    date: Date;
    exercises: Exercise[];
    notes?: string;
}