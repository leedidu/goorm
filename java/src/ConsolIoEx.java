import java.util.Scanner;

public class ConsolIoEx {
    public static void main(String[] args) {
        System.out.println("Hello Java!");
        System.out.println("YoungSook and Bugak babo");
        System.out.print("전복을 누가 손질해야하나요? : ");

        Scanner scanner = new Scanner(System.in);
//        String name = scanner.nextLine();
//        System.out.println(name + " 손질하세요");

        // 변수 : 데이터 저장하는 메모리 공간, 선언과 초기화
        // 정수형
        int age = 24;
        long population = 17489189374981L;

        // 실수형
        float weight = 70.5F;
        double height = 178.4;

        // 문자형
        char ch = 3;

        //논리형
        boolean isStudent = true;

        double pi = 3.14;
        int truncatedPi = (int) pi;
        System.out.println("pi : " + pi + "\n" + "truncatedPi : " + truncatedPi);

        // 수를 입력 받아 홀/짝 판별하는 프로그램
        System.out.print("수를 입력하세요 : ");
        int num = scanner.nextInt();

        if(num % 2 == 0){
            System.out.println(num + "은 짝수입니다");
        } else {
            System.out.println(num + "은 홀수입니다");
        }
    }
}