import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return ['0.1', '0.12', '0.15', '0.18', '0.2', '0.25'];
    }
});
