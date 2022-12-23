nav ul li a::before{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 1px;
    transition: width 0.5s ease-out;
    background-color: rgb(255, 255, 255);

}
nav ul li a:hover::before{
    width: 100%;
    height: 1px;
}