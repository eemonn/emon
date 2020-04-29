public class HumanPlayer implements Player,Human{
    private GameLogic g;
    private int pos;

    private TextUI humanPlayer=new TextUI();


    //private SwingGUI humanPlayer=new SwingGUI();

    @Override
    public void gameOver(Status winner) {
    humanPlayer.gameOver(winner);
    }



    @Override
    public void lastMove(int lastCol) {
    humanPlayer.lastMove(lastCol);

    //creating next move
        int nextMove = 0 + (int)(Math.random() * pos);

        g.setAnswer(nextMove);
    }//lastMove

    @Override
    public void setInfo(int size, GameLogic gl) {
   pos=size;
    g=gl;
    humanPlayer.setInfo(this,size);
    }

    @Override
    public void setAnswer(int col) {
       g.setAnswer(col);
    }
}//HumanPlayer
