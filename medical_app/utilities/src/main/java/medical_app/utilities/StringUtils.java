/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package medical_app.utilities;

import medical_app.list.LinkedList;

public class StringUtils {
    public static String join(LinkedList source) {
        return JoinUtils.join(source);
    }

    public static LinkedList split(String source) {
        return SplitUtils.split(source);
    }
}
