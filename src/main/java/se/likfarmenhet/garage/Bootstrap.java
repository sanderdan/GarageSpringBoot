package se.likfarmenhet.garage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ImportResource;

/**
 *
 * @author Alexander
 */
@ComponentScan
@EnableAutoConfiguration
@ImportResource("classpath:META-INF/application-context.xml")
public class Bootstrap {

    public static void main(String[] args) {
        System.out.println("");
        System.out.println("`7MM\"\"\"Mq.`7MM\"\"\"Mq.   .g8\"\"8q. `7MM\"\"\"YMM `7MM\"\"\"YMM  .M\"\"\"bgd `7MMF' `YMM' .g8\"\"8q. `7MM\"\"\"Yb.");
        System.out.println("  MM   `MM. MM   `MM..dP'    `YM. MM    `7   MM    `7 ,MI    \"Y   MM   .M' .dP'    `YM. MM    `Yb.");
        System.out.println("  MM   ,M9  MM   ,M9 dM'      `MM MM   d     MM   d   `MMb.       MM .d\"   dM'      `MM MM     `Mb");
        System.out.println("  MMmmdM9   MMmmdM9  MM        MM MM\"\"MM     MM\"\"MM     `YMMNq.   MMMMM.   MM        MM MM      MM");
        System.out.println("  MM        MM  YM.  MM.      ,MP MM   Y     MM   Y   .     `MM   MM  VMA  MM.      ,MP MM     ,MP");
        System.out.println("  MM        MM   `Mb.`Mb.    ,dP' MM         MM       Mb     dM   MM   `MM.`Mb.    ,dP' MM    ,dP'");
        System.out.println(".JMML.    .JMML. .JMM. `\"bmmd\"' .JMML.     .JMML.     P\"Ybmmd\"  .JMML.   MMb.`\"bmmd\"' .JMMmmmdP'");
        
        ConfigurableApplicationContext applicationContext = SpringApplication.run(Bootstrap.class, args);
    }

}