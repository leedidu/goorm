<%--
  Created by IntelliJ IDEA.
  User: didu
  Date: 2024. 9. 5.
  Time: PM 3:16
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Quiz</title>
</head>
<body>

<h1>Quiz</h1>
<form action="/quiz" method="post">
    ${question}
    <input type="text" name="answer"/><br>

    <button type="submit">submit</button>
</form>
</body>
</html>
