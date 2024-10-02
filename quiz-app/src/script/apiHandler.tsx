import axios from "axios";

const baseUrl = "https://opentdb.com/api.php";

export const getQuestions = async (amount: number = 10, difficulty: string = "medium") => {
    try{
        const response = await axios.get(`${baseUrl}`, {
            params: {
                amount,
                difficulty,
                type: 'multiple',
            }
        });
        return response.data.results

    }catch(error){
        console.error("Error fetching questions", error)
    }
}