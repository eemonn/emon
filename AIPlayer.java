public class AIPlayer implements Player {
    private GameLogic g;
    private int pos;

   Status [][]board; //internal board

    public AIPlayer(Status[][]b){
        this.board=b;
    }//constructor

    @Override
    public void gameOver(Status winner) {
      //  winner=gameResult(board);


        System.out.println("Game over!");
        if (winner == Status.NEITHER) {
            System.out.println("Game is a draw.");
        } else if (winner == Status.ONE) {
            System.out.println("You win.");
        } else {
            System.out.println("Computer wins.");
        }
    }

    @Override
   public void lastMove(int lastCol) {

        addToBoard(lastCol);
        int nextMove = 0 + (int)(Math.random() * pos);

        boolean add = checkBoard(nextMove);

        while(add)
        {
            nextMove = 0 + (int)(Math.random() * pos);
            add = checkBoard(nextMove);
        }


        g.setAnswer(nextMove);
    }//lastMOve

    private boolean checkBoard(int col)
    {

        boolean full = false;

        if(board[0][col] == Status.ONE)
        {
            full = true;
        }

        return full;
    }//an private method checkBoard

    @Override
    public void setInfo(int size, GameLogic gl) {
        g=gl;
        pos=size;
    }//setInfo

    private void addToBoard(int col) {
        boolean added = false;
        for (int i = pos-1; i >= 0 && !added; i--) {
            if (board[i][col] != Status.ONE) {
                board[i][col] = Status.ONE;
                added = true;

            }
        }
    }//addToBoard

}//AIPlayer
