import {Component, Input,ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'todo-footer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <footer id="footer">
            <button>Total Todos: {{count}}</button>
        </footer>
    `
})
export class Footer {

    @Input() count: number = 0;

}