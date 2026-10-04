export function Terminal() {
  return (
    <div className="terminal-panel">
      <div className="panel-header muted">MUSE.SYSTEM</div>
      <pre className="terminal-output">
{`$ muse status
MUSE
ACTIVE

$ muse rooms
1842

$ muse building
ROOM_1843

$ muse stop
ERROR
MUSE IS CURRENTLY BUILDING.`}
      </pre>
    </div>
  );
}
