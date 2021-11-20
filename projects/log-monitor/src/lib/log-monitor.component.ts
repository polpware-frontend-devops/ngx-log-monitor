import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input, NgZone,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import { LogMessage } from './models/log-message.model';
import { normalizeLogMessage } from './helpers/log-message.helper';
import { Observable, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
    selector: 'log-monitor',
    templateUrl: './log-monitor.component.html',
    styleUrls: ['./log-monitor.component.scss']
})
export class LogMonitorComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    @Input() delay = 500;
    @Input() title;
    @Input() logStream: Observable<LogMessage>;
    @Input() history: LogMessage[] = [];
    @Input() theme: 'dark' | 'light' = 'dark';
    @Input() icons = true;
    @Input() customClass = 'log-container';
    @Input() animated = true;
    @ViewChild('container') container: ElementRef;

    _history: LogMessage[] = [];

    private _subr: Subscription;

    constructor(private zone: NgZone) { }

    ngOnInit() {
        if (this.logStream) {
            this._subr = this.logStream
                .pipe(delay(this.delay))
                .subscribe(a => {
                    this._history.push(normalizeLogMessage(a));
                    this.zone.run(() => {
                        setTimeout(() => this.scrollToBottom());
                    });
                });
        }
    }

    ngOnDestroy() {
        if (this._subr) {
            this._subr.unsubscribe();
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['history']) {
            this._history = changes['history'].currentValue.map(normalizeLogMessage);
        }
    }

    ngAfterViewInit() {
        this.scrollToBottom();
    }

    private scrollToBottom() {
        this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
    }

}
