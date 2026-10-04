import { museLogs } from '../data/logs';

export function MuseLog() {
  return (
    <div className="log-panel">
      <div className="panel-header muted">MUSE LOG</div>
      <div className="log-list">
        {museLogs.map((entry) => (
          <div key={entry.id} className="log-item">
            <div className="log-id">{entry.id}</div>
            <div className="log-msg">{entry.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
