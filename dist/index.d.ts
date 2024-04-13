declare class IELTSScoreCalculator {
    private conversionTable;
    constructor();
    private convertToScore;
    private calculateScore;
    private calculateWritingScore;
    overallScore(listeningCorrect: number, readingCorrect: number, writingTasks: {
        task1: number;
        task2: number;
    }, speaking: number): {
        overall: string;
        each: {
            reading_score: number;
            reading_answers: number;
            listening_score: number;
            listening_answers: number;
            writing_task1_score: number;
            writing_task2_score: number;
            writing_score_overall: number;
            speaking_score: number;
        };
    };
}
export declare const calculate: IELTSScoreCalculator;
export {};
