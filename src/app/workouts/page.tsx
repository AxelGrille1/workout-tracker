'use client'
import { ExerciseSet, Exercise, Session } from '@/types/workoutTypes';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

export default function WorkoutsPage() {
    // State for sessions list
    const [sessionsList, setSessionsList] = useState<Session[]>([]);

    const [session, setSession] = useState<Session | null>(null);
    const [exercise, setExercise] = useState<Exercise | null>(null);
    const [exerciseSet, setExerciseSet] = useState<ExerciseSet | null>(null);

    // State for form inputs
    const [sessionName, setSessionName] = useState<string>('');
    const [sessionDate, setSessionDate] = useState<string>(
        new Date().toISOString().split('T')[0]
    );

    // State for showing/hiding the form 
    const [showForm, setShowForm] = useState<boolean>(false);


    function createWorkoutSession(e: React.FormEvent) {
        e.preventDefault();

        //Parse date from input
        const dateObj = new Date(sessionDate);

        // Create a new session with the right structure
        const newSession: Session = {
            id: uuidv4(),
            name: sessionName,
            date: dateObj,
            exercises: []
        }

        setSession(newSession);
        setSessionsList([...sessionsList, newSession]) // Add to session list

        // Reset the form
        setSessionName('');
        setShowForm(false);
    }

    function formatDate(date: Date): string {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }

    return  (
        <div>
            <h1>Workout Sessions</h1>
            
            <div>
                <button 
                id="New-workout" 
                onClick={() => setShowForm(true)}
                >
                    New Workout
                </button>

            {showForm && (
                <form onSubmit={createWorkoutSession}>
                    <div>
                        <label htmlFor="session-name">Session Name:</label>
                        <input
                        id="session-name"
                        type="text"
                        value={sessionName}
                        onChange={(e) => setSessionName(e.target.value)}
                        required
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="session-date">Date:</label>
                        <input
                        id="session-date"
                        type="date"
                        value={sessionDate}
                        onChange={(e) => setSessionDate(e.target.value)}
                        required
                        />
                    </div>

                    <button type="submit">Create Session</button>
                    <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
                </form>
            )}

            {/* Display list of sessions*/}
                <div>
                    <h2>Your Sessions</h2>
                    <ul>
                        {sessionsList.map(session => (
                            <li key={session.id}>
                                <strong>{session.name}</strong> - {formatDate(session.date)}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );      
}
