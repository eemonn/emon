public class MyGameLogic implements GameLogic {
    private int num=0;
    private int colnum=-1;
    private Status board[][];
    private HumanPlayer human;
    private AIPlayer machine;
    private int size;
    private Status s=Status.NEITHER;
    private int determine;
    private boolean find;

    public MyGameLogic(){
        determine=0+(int)(Math.random() * ((1 - 0) + 1)); //choosing who is playing first-machine or human
        size=6+(int)(Math.random() * ((12 - 6) + 1)); //randomly generate size between 6-12


        board=new Status[size][size];
        initializeBoard();
        human=new HumanPlayer();
        machine=new AIPlayer(board);

    }

    public void startGame(){
        human.setInfo(size,this);
        machine.setInfo(size,this);

        turn(colnum);

    }

    public int getSize(){
        return size;
    }


    private void initializeBoard(){
        for(int i=0;i<size;i++){
            for(int j=0;j<board[i].length;j++){
                board[i][j]=s;
            }
        }
    }//initializeBoard




    @Override
    public void setAnswer(int col){
        //num++;
        colnum=col;
        addTopiece(col);

        turn(col);
    }//setAnswer


    private void addTopiece(int col){
       boolean added = addPlayerToColumn(col);

        if (added == true) {
            addAIToColumn(colnum);

        }

        if (boardFull()) {
            System.out.println("Board  is full");

       }
    }//addtoPiece

    private boolean addPlayerToColumn(int col){
        boolean added = false;

        if (board[0][col] != Status.NEITHER) {
            added = false;
        } else {
            boolean filled = false;
            for (int i = size-1; i >= 0 && !filled; i--) {
                if (board[i][col] == Status.NEITHER) {
                    board[i][col] = Status.ONE;
                    added = true;
                    filled = true;
                }
            }

        }//addToplayercolumn

        return added;
    }//addPlayerTocolumn
    private boolean addAIToColumn(int col){
        boolean added = false;

        if (board[0][col] != Status.NEITHER) {
            added = false;
        } else {
            boolean filled = false;
            for (int i = size-1; i >= 0 && !filled; i--) {
                if (board[i][col] == Status.NEITHER) {
                    board[i][col] = Status.TWO;
                    added = true;
                    filled = true;
                }
            }

        }

        return added;
    }//addAiTocolumn

    private boolean boardFull() {
        boolean full = true;

        for (int j = 0; j < size&&full; j++) {
            for(int i=0;i<size;i++) {
                if (board[j][i] == Status.NEITHER) {
                    full = false;
                }
            }
        }

        return full;
    }//checking board is full or not




    private void turn(int col){
        num++;

        if(num%2==0){

            machine.lastMove(col);
        }
        else{

            human.lastMove(col);
        }
    }//turn

}//MYgameLogic class
