package com.github.appreciated.app.layout.test.view;

import com.github.appreciated.app.layout.test.uis.left.LeftResponsiveBehavior;
import com.vaadin.flow.router.Route;

@Route(value = "view7", layout = LeftResponsiveBehavior.class) // an empty view name will also be the default view
public class View7 extends ExampleView {
    @Override
    protected String getViewName() {
        return getClass().getName();
    }
}
