// Урок 0 (Начало) - introduction.js

// Почему именно этот обучающий курс?

// Когда я сам пытался изучать Redux, Я стал осознавать, что в моей голове накапливаются некорректные знания о flux
// взятые из сторонних статей и моего собственного опыта его использования. Я не утверждаю что все статьи о flux
// плохо написаны, но изучая их я все больше и больше уходил в сторону от правильного понимал концепций flux.

// В конце концов я стал просто применять то, что описано в документациях в различных flux фреймворках 
// (Reflux, Flummox, FB Flux) и пататься приспособить их к теоретическим представлениям, которые я изучал о
// (действиях {actions} / родителях действий {actions creators}, хранилищах {store}, диспетчерах {dispatcher} и т.д.).
//
// Только когда я начал использовать Redux, я понял, что на самом деле flux намного проще чем я предполагал.
// Все это благодаря хорошо оформленному архитектурному дизайну самого Redux, в котором убраны излишние компоненты
// присущие остальным фреймворкам. Таким образом на данный момент Redux самый лучший путь к изуению принципов flux.
// Вот почему я захотел поделится своим опытом со всеми, кто только начинает изучение flux.

// На диаграмме ниже Вы можете видеть классическое представление потока данных flux приложения:

/*
                 __________               ______________              ______________
                |          |             |              |             |             |
                | Действие |             |  Диспетчер   |             |   колбэки   |
                | (Action) |------------▶| (Dispatcher) |------------▶| (callbacks) |
                |__________|             |______________|             |_____________|
                     ▲                                                      |
                     |                                                      |
                     |                                                      |
 _________       ____|_____                                           ______▼_____
|         |◀----|          |                                          |           |
|         |     |  Action  |                                          | Хранилище |
| Web API |     | Creators |                                          |  (Store)  |
|_________|----▶|__________|                                          |___________|
                     ▲                                                      |
                     |                                                      |
                 ____|_________           ___________                   ____▼____
                |     User     |         |   React   |                 | Change  |
                | interactions |◀--------|   Views   |◀----------------| events  |
                |______________|         |___________|                 |_________|

*/

// In this tutorial we'll gradually introduce you to concepts of the diagram above. But instead of trying
// to explain this complete diagram and the overall flow it describes, we'll take each piece separately and try to
// understand why it exists and what role it plays. In the end you'll see that this diagram makes perfect sense
// once we understand each of its parts.

// But before we start, let's talk a little bit about why flux exists and why we need it...
// Let's pretend we're building a web application. What are all web applications made of?
// 1) Templates / html = View
// 2) Data that will populate our views = Models
// 3) Logic to retrieve data, glue all views together and to react accordingly to user events,
//    data modifications, etc. = Controller

// This is the very classic MVC that we all know about. But it actually looks like concepts of flux,
// just expressed in a slightly different way:
// - Models look like stores
// - user events, data modifications and their handlers look like
//   "action creators" -> action -> dispatcher -> callback
// - Views look like React views (or anything else as far as flux is concerned)

// So is flux just a matter of new vocabulary? Not exactly. But vocabulary DOES matter, because by introducing
// these new terms we are now able to express more precisely things that were regrouped under
// various terminologies... For example, isn't a data fetch an action? Just like a click is also an action?
// And a change in an input is an action too... Then we're all already used to issuing actions from our
// applications, we were just calling them differently. And instead of having handlers for those
// actions directly modify Models or Views, flux ensures all actions go first through something called
// a dispatcher, then through our stores, and finally all watchers of stores are notified.

// To get more clarity how MVC and flux differ, we'll
// take a classic use-case in an MVC application:
// In a classic MVC application you could easily end up with:
// 1) User clicks on button "A"
// 2) A click handler on button "A" triggers a change on Model "A"
// 3) A change handler on Model "A" triggers a change on Model "B"
// 4) A change handler on Model "B" triggers a change on View "B" that re-renders itself

// Finding the source of a bug in such an environment when something goes wrong can become quite challenging
// very quickly. This is because every View can watch every Model, and every Model can watch other Models, so
// basically data can arrive from a lot of places and be changed by a lot of sources (any views or any models).

// Whereas when using flux and its unidirectional data flow, the example above could become:
// 1) user clicks on button "A"
// 2) a handler on button "A" triggers an action that is dispatched and produces a change on Store "A"
// 3) since all other stores are also notified about the action, Store B can react to the same action too
// 4) View "B" gets notified by the change in Stores A and B, and re-renders

// See how we avoid directly linking Store A to Store B? Each store can only be
// modified by an action and nothing else. And once all stores have replied to an action,
// views can finally update. So in the end, data always flows in one way:
//     action -> store -> view -> action -> store -> view -> action -> ...

// Just as we started our use case above from an action, let's start our tutorial with
// actions and action creators.

// Go to next tutorial: 01_simple-action-creator.js
