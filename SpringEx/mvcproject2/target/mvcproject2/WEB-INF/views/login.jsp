<%--
  Created by IntelliJ IDEA.
  User: didu
  Date: 2024. 9. 3.
  Time: PM 3:08
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<html>
<head>
    <title>Login</title>
</head>
<body>
<h1>
    Login
</h1>
<form:form modelAttribute="user">
    ID : <form:input path="email"/><br>
    PW : <form:password path="password" />
    <input type="submit" value="Login">
</form:form>
</body>
</html>
