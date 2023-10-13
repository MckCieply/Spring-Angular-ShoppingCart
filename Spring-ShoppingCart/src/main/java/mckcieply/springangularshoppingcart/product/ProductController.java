package mckcieply.springangularshoppingcart.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("api/products")
public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping("/hello")
    public String sayHello() {

        return "Hello World";
    }
}
