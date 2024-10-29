import { Player } from "./Player";
import { Question } from "./Question";

export interface GameContextProps {
    players: Player[];
    currentQuestion: Question | null;
    setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
    nextQuestion: (category?: string) => void;
    addScore: (playerId: number) => void;
    resetGame: () => void;
    selectedCategory: string | null;
    setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}