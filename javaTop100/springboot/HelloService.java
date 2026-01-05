package springboot;

@Service
public class HelloService {
    public String message(){
        return "Hello from Service.";
    }
    
}

@RestController
public class HelloController{

    @Autowired
    HelloService service;

    @GetMapping("/hello")
    public String hello(){
        return service.message();
    }

    }
